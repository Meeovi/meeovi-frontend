import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCreateWithoutAcl_roleInput } from "../inputs/Integration_roleCreateWithoutAcl_roleInput";
import { Integration_roleUpdateWithoutAcl_roleInput } from "../inputs/Integration_roleUpdateWithoutAcl_roleInput";
import { Integration_roleWhereUniqueInput } from "../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.InputType("Integration_roleUpsertWithWhereUniqueWithoutAcl_roleInput", {})
export class Integration_roleUpsertWithWhereUniqueWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => Integration_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Integration_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Integration_roleUpdateWithoutAcl_roleInput, {
    nullable: false
  })
  update!: Integration_roleUpdateWithoutAcl_roleInput;

  @TypeGraphQL.Field(_type => Integration_roleCreateWithoutAcl_roleInput, {
    nullable: false
  })
  create!: Integration_roleCreateWithoutAcl_roleInput;
}
