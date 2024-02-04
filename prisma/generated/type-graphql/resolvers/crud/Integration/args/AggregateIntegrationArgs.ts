import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/IntegrationOrderByWithRelationAndSearchRelevanceInput";
import { IntegrationWhereInput } from "../../../inputs/IntegrationWhereInput";
import { IntegrationWhereUniqueInput } from "../../../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: IntegrationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  cursor?: IntegrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
