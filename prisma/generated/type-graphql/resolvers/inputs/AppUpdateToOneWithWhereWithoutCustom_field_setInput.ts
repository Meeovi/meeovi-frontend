import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutCustom_field_setInput } from "../inputs/AppUpdateWithoutCustom_field_setInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutCustom_field_setInput", {})
export class AppUpdateToOneWithWhereWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutCustom_field_setInput, {
    nullable: false
  })
  data!: AppUpdateWithoutCustom_field_setInput;
}
