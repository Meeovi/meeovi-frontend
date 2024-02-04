import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowCreateInput } from "../../../inputs/FlowCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFlowArgs {
  @TypeGraphQL.Field(_type => FlowCreateInput, {
    nullable: false
  })
  data!: FlowCreateInput;
}
