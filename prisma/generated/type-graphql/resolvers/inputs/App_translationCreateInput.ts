import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedOneWithoutApp_translationInput } from "../inputs/AppCreateNestedOneWithoutApp_translationInput";
import { LanguageCreateNestedOneWithoutApp_translationInput } from "../inputs/LanguageCreateNestedOneWithoutApp_translationInput";

@TypeGraphQL.InputType("App_translationCreateInput", {})
export class App_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privacy_policy_extensions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => AppCreateNestedOneWithoutApp_translationInput, {
    nullable: false
  })
  app!: AppCreateNestedOneWithoutApp_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutApp_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutApp_translationInput;
}
