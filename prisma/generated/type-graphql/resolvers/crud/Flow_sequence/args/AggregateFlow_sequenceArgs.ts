import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Flow_sequenceOrderByWithRelationAndSearchRelevanceInput";
import { Flow_sequenceWhereInput } from "../../../inputs/Flow_sequenceWhereInput";
import { Flow_sequenceWhereUniqueInput } from "../../../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFlow_sequenceArgs {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  where?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Flow_sequenceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: Flow_sequenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
