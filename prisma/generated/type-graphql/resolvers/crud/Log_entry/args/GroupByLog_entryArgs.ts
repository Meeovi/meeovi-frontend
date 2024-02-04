import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Log_entryOrderByWithAggregationInput } from "../../../inputs/Log_entryOrderByWithAggregationInput";
import { Log_entryScalarWhereWithAggregatesInput } from "../../../inputs/Log_entryScalarWhereWithAggregatesInput";
import { Log_entryWhereInput } from "../../../inputs/Log_entryWhereInput";
import { Log_entryScalarFieldEnum } from "../../../../enums/Log_entryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLog_entryArgs {
  @TypeGraphQL.Field(_type => Log_entryWhereInput, {
    nullable: true
  })
  where?: Log_entryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Log_entryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Log_entryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Log_entryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "message" | "level" | "channel" | "context" | "extra" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Log_entryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Log_entryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
