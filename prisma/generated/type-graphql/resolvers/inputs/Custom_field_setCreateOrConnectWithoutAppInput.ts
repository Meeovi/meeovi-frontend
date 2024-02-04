import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateWithoutAppInput } from "../inputs/Custom_field_setCreateWithoutAppInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setCreateOrConnectWithoutAppInput", {})
export class Custom_field_setCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutAppInput, {
    nullable: false
  })
  create!: Custom_field_setCreateWithoutAppInput;
}
