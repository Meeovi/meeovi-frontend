import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/NotificationOrderByWithRelationAndSearchRelevanceInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
import { NotificationWhereUniqueInput } from "../../../inputs/NotificationWhereUniqueInput";
import { NotificationScalarFieldEnum } from "../../../../enums/NotificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class IntegrationNotificationArgs {
  @TypeGraphQL.Field(_type => NotificationWhereInput, {
    nullable: true
  })
  where?: NotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NotificationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: NotificationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: true
  })
  cursor?: NotificationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "status" | "message" | "admin_only" | "required_privileges" | "created_by_integration_id" | "created_by_user_id" | "created_at" | "updated_at"> | undefined;
}
