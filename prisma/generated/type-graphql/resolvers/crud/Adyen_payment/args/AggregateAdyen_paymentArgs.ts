import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_paymentOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Adyen_paymentOrderByWithRelationAndSearchRelevanceInput";
import { Adyen_paymentWhereInput } from "../../../inputs/Adyen_paymentWhereInput";
import { Adyen_paymentWhereUniqueInput } from "../../../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAdyen_paymentArgs {
  @TypeGraphQL.Field(_type => Adyen_paymentWhereInput, {
    nullable: true
  })
  where?: Adyen_paymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Adyen_paymentOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentWhereUniqueInput, {
    nullable: true
  })
  cursor?: Adyen_paymentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
