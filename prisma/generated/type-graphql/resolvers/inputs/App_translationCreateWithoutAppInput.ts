import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutApp_translationInput } from "../inputs/LanguageCreateNestedOneWithoutApp_translationInput";

@TypeGraphQL.InputType("App_translationCreateWithoutAppInput", {})
export class App_translationCreateWithoutAppInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutApp_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutApp_translationInput;
}
