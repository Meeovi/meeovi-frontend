import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionCreateInput } from "../../../inputs/Event_actionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEvent_actionArgs {
  @TypeGraphQL.Field(_type => Event_actionCreateInput, {
    nullable: false
  })
  data!: Event_actionCreateInput;
}
