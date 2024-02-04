import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueOrderByWithAggregationInput } from "../../../inputs/EnqueueOrderByWithAggregationInput";
import { EnqueueScalarWhereWithAggregatesInput } from "../../../inputs/EnqueueScalarWhereWithAggregatesInput";
import { EnqueueWhereInput } from "../../../inputs/EnqueueWhereInput";
import { EnqueueScalarFieldEnum } from "../../../../enums/EnqueueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEnqueueArgs {
  @TypeGraphQL.Field(_type => EnqueueWhereInput, {
    nullable: true
  })
  where?: EnqueueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EnqueueOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EnqueueOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnqueueScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "published_at" | "body" | "headers" | "properties" | "redelivered" | "queue" | "priority" | "delayed_until" | "time_to_live" | "delivery_id" | "redeliver_after">;

  @TypeGraphQL.Field(_type => EnqueueScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EnqueueScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
