import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedOneWithoutApp_flow_actionInput } from "../inputs/AppCreateNestedOneWithoutApp_flow_actionInput";
import { Flow_sequenceCreateNestedManyWithoutApp_flow_actionInput } from "../inputs/Flow_sequenceCreateNestedManyWithoutApp_flow_actionInput";

@TypeGraphQL.InputType("App_flow_actionCreateWithoutApp_flow_action_translationInput", {})
export class App_flow_actionCreateWithoutApp_flow_action_translationInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  badge?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delayable?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parameters?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  headers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requirements?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  icon?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sw_icon?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => AppCreateNestedOneWithoutApp_flow_actionInput, {
    nullable: false
  })
  app!: AppCreateNestedOneWithoutApp_flow_actionInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateNestedManyWithoutApp_flow_actionInput, {
    nullable: true
  })
  flow_sequence?: Flow_sequenceCreateNestedManyWithoutApp_flow_actionInput | undefined;
}
