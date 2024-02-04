import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutCustom_field_setInput } from "../inputs/AppCreateWithoutCustom_field_setInput";
import { AppUpdateWithoutCustom_field_setInput } from "../inputs/AppUpdateWithoutCustom_field_setInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutCustom_field_setInput", {})
export class AppUpsertWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutCustom_field_setInput, {
    nullable: false
  })
  update!: AppUpdateWithoutCustom_field_setInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutCustom_field_setInput, {
    nullable: false
  })
  create!: AppCreateWithoutCustom_field_setInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
