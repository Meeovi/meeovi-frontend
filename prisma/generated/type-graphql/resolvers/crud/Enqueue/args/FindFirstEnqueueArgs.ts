import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EnqueueOrderByWithRelationAndSearchRelevanceInput";
import { EnqueueWhereInput } from "../../../inputs/EnqueueWhereInput";
import { EnqueueWhereUniqueInput } from "../../../inputs/EnqueueWhereUniqueInput";
import { EnqueueScalarFieldEnum } from "../../../../enums/EnqueueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEnqueueArgs {
  @TypeGraphQL.Field(_type => EnqueueWhereInput, {
    nullable: true
  })
  where?: EnqueueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EnqueueOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: EnqueueOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => EnqueueWhereUniqueInput, {
    nullable: true
  })
  cursor?: EnqueueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EnqueueScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "published_at" | "body" | "headers" | "properties" | "redelivered" | "queue" | "priority" | "delayed_until" | "time_to_live" | "delivery_id" | "redeliver_after"> | undefined;
}
