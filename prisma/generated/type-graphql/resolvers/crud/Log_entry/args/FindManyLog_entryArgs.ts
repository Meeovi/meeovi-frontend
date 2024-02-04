import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Log_entryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Log_entryOrderByWithRelationAndSearchRelevanceInput";
import { Log_entryWhereInput } from "../../../inputs/Log_entryWhereInput";
import { Log_entryWhereUniqueInput } from "../../../inputs/Log_entryWhereUniqueInput";
import { Log_entryScalarFieldEnum } from "../../../../enums/Log_entryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLog_entryArgs {
  @TypeGraphQL.Field(_type => Log_entryWhereInput, {
    nullable: true
  })
  where?: Log_entryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Log_entryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Log_entryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Log_entryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Log_entryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Log_entryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "message" | "level" | "channel" | "context" | "extra" | "created_at" | "updated_at"> | undefined;
}
