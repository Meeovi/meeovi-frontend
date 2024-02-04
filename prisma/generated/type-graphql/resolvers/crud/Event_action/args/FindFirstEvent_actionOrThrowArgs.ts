import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Event_actionOrderByWithRelationAndSearchRelevanceInput";
import { Event_actionWhereInput } from "../../../inputs/Event_actionWhereInput";
import { Event_actionWhereUniqueInput } from "../../../inputs/Event_actionWhereUniqueInput";
import { Event_actionScalarFieldEnum } from "../../../../enums/Event_actionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEvent_actionOrThrowArgs {
  @TypeGraphQL.Field(_type => Event_actionWhereInput, {
    nullable: true
  })
  where?: Event_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Event_actionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Event_actionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Event_actionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Event_actionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "event_name" | "action_name" | "config" | "custom_fields" | "active" | "migrated_flow_id" | "created_at" | "updated_at"> | undefined;
}
