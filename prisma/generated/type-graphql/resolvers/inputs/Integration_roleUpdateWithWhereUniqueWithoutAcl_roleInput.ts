import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleUpdateWithoutAcl_roleInput } from "../inputs/Integration_roleUpdateWithoutAcl_roleInput";
import { Integration_roleWhereUniqueInput } from "../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.InputType("Integration_roleUpdateWithWhereUniqueWithoutAcl_roleInput", {})
export class Integration_roleUpdateWithWhereUniqueWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => Integration_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Integration_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Integration_roleUpdateWithoutAcl_roleInput, {
    nullable: false
  })
  data!: Integration_roleUpdateWithoutAcl_roleInput;
}
