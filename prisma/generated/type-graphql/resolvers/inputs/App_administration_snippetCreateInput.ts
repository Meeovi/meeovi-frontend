import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedOneWithoutApp_administration_snippetInput } from "../inputs/AppCreateNestedOneWithoutApp_administration_snippetInput";
import { LocaleCreateNestedOneWithoutApp_administration_snippetInput } from "../inputs/LocaleCreateNestedOneWithoutApp_administration_snippetInput";

@TypeGraphQL.InputType("App_administration_snippetCreateInput", {})
export class App_administration_snippetCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => AppCreateNestedOneWithoutApp_administration_snippetInput, {
    nullable: false
  })
  app!: AppCreateNestedOneWithoutApp_administration_snippetInput;

  @TypeGraphQL.Field(_type => LocaleCreateNestedOneWithoutApp_administration_snippetInput, {
    nullable: false
  })
  locale!: LocaleCreateNestedOneWithoutApp_administration_snippetInput;
}
