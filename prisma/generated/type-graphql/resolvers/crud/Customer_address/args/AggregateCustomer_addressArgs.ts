import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_addressOrderByWithRelationAndSearchRelevanceInput";
import { Customer_addressWhereInput } from "../../../inputs/Customer_addressWhereInput";
import { Customer_addressWhereUniqueInput } from "../../../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomer_addressArgs {
  @TypeGraphQL.Field(_type => Customer_addressWhereInput, {
    nullable: true
  })
  where?: Customer_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_addressOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_addressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
