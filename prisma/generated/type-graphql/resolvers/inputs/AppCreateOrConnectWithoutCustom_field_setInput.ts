import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutCustom_field_setInput } from "../inputs/AppCreateWithoutCustom_field_setInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutCustom_field_setInput", {})
export class AppCreateOrConnectWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutCustom_field_setInput, {
    nullable: false
  })
  create!: AppCreateWithoutCustom_field_setInput;
}
