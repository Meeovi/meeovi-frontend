import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionWhereUniqueInput } from "../../../inputs/Event_actionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEvent_actionArgs {
  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: false
  })
  where!: Event_actionWhereUniqueInput;
}
