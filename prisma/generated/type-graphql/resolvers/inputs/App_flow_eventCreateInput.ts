import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedOneWithoutApp_flow_eventInput } from "../inputs/AppCreateNestedOneWithoutApp_flow_eventInput";
import { FlowCreateNestedManyWithoutApp_flow_eventInput } from "../inputs/FlowCreateNestedManyWithoutApp_flow_eventInput";

@TypeGraphQL.InputType("App_flow_eventCreateInput", {})
export class App_flow_eventCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  aware!: string;

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

  @TypeGraphQL.Field(_type => AppCreateNestedOneWithoutApp_flow_eventInput, {
    nullable: false
  })
  app!: AppCreateNestedOneWithoutApp_flow_eventInput;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutApp_flow_eventInput, {
    nullable: true
  })
  flow?: FlowCreateNestedManyWithoutApp_flow_eventInput | undefined;
}
