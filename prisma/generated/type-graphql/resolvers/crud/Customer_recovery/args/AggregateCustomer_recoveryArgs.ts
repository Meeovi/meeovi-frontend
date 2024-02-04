import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_recoveryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_recoveryOrderByWithRelationAndSearchRelevanceInput";
import { Customer_recoveryWhereInput } from "../../../inputs/Customer_recoveryWhereInput";
import { Customer_recoveryWhereUniqueInput } from "../../../inputs/Customer_recoveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomer_recoveryArgs {
  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  where?: Customer_recoveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_recoveryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_recoveryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_recoveryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
