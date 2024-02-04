import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionWhereInput } from "../../../inputs/Event_actionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEvent_actionArgs {
  @TypeGraphQL.Field(_type => Event_actionWhereInput, {
    nullable: true
  })
  where?: Event_actionWhereInput | undefined;
}
