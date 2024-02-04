import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManyProductInputEnvelope } from "../inputs/Main_categoryCreateManyProductInputEnvelope";
import { Main_categoryCreateOrConnectWithoutProductInput } from "../inputs/Main_categoryCreateOrConnectWithoutProductInput";
import { Main_categoryCreateWithoutProductInput } from "../inputs/Main_categoryCreateWithoutProductInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryCreateNestedManyWithoutProductInput", {})
export class Main_categoryCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Main_categoryCreateWithoutProductInput], {
    nullable: true
  })
  create?: Main_categoryCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Main_categoryCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Main_categoryCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Main_categoryWhereUniqueInput[] | undefined;
}
