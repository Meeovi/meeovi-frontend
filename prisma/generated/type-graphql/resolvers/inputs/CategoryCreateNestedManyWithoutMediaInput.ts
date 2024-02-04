import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyMediaInputEnvelope } from "../inputs/CategoryCreateManyMediaInputEnvelope";
import { CategoryCreateOrConnectWithoutMediaInput } from "../inputs/CategoryCreateOrConnectWithoutMediaInput";
import { CategoryCreateWithoutMediaInput } from "../inputs/CategoryCreateWithoutMediaInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedManyWithoutMediaInput", {})
export class CategoryCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutMediaInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
