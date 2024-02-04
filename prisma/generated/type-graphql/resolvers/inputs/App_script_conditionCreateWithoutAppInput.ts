import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCreateNestedManyWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationCreateNestedManyWithoutApp_script_conditionInput";
import { Rule_conditionCreateNestedManyWithoutApp_script_conditionInput } from "../inputs/Rule_conditionCreateNestedManyWithoutApp_script_conditionInput";

@TypeGraphQL.InputType("App_script_conditionCreateWithoutAppInput", {})
export class App_script_conditionCreateWithoutAppInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  group?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  script?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  constraints?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationCreateNestedManyWithoutApp_script_conditionInput, {
    nullable: true
  })
  app_script_condition_translation?: App_script_condition_translationCreateNestedManyWithoutApp_script_conditionInput | undefined;

  @TypeGraphQL.Field(_type => Rule_conditionCreateNestedManyWithoutApp_script_conditionInput, {
    nullable: true
  })
  rule_condition?: Rule_conditionCreateNestedManyWithoutApp_script_conditionInput | undefined;
}
