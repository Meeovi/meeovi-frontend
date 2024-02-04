import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManyCategoryInputEnvelope } from "../inputs/Main_categoryCreateManyCategoryInputEnvelope";
import { Main_categoryCreateOrConnectWithoutCategoryInput } from "../inputs/Main_categoryCreateOrConnectWithoutCategoryInput";
import { Main_categoryCreateWithoutCategoryInput } from "../inputs/Main_categoryCreateWithoutCategoryInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryCreateNestedManyWithoutCategoryInput", {})
export class Main_categoryCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [Main_categoryCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Main_categoryCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Main_categoryCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Main_categoryCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Main_categoryWhereUniqueInput[] | undefined;
}
