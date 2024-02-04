import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionCreateInput } from "../../../inputs/Event_actionCreateInput";
import { Event_actionUpdateInput } from "../../../inputs/Event_actionUpdateInput";
import { Event_actionWhereUniqueInput } from "../../../inputs/Event_actionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEvent_actionArgs {
  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: false
  })
  where!: Event_actionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Event_actionCreateInput, {
    nullable: false
  })
  create!: Event_actionCreateInput;

  @TypeGraphQL.Field(_type => Event_actionUpdateInput, {
    nullable: false
  })
  update!: Event_actionUpdateInput;
}
