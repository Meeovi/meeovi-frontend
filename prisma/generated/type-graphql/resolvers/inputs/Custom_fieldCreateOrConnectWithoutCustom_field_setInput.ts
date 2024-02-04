import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateWithoutCustom_field_setInput } from "../inputs/Custom_fieldCreateWithoutCustom_field_setInput";
import { Custom_fieldWhereUniqueInput } from "../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Custom_fieldCreateOrConnectWithoutCustom_field_setInput", {})
export class Custom_fieldCreateOrConnectWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_fieldWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_fieldCreateWithoutCustom_field_setInput, {
    nullable: false
  })
  create!: Custom_fieldCreateWithoutCustom_field_setInput;
}
