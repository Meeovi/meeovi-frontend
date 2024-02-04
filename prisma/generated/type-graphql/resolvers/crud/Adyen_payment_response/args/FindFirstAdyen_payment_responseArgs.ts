import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_responseOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Adyen_payment_responseOrderByWithRelationAndSearchRelevanceInput";
import { Adyen_payment_responseWhereInput } from "../../../inputs/Adyen_payment_responseWhereInput";
import { Adyen_payment_responseWhereUniqueInput } from "../../../inputs/Adyen_payment_responseWhereUniqueInput";
import { Adyen_payment_responseScalarFieldEnum } from "../../../../enums/Adyen_payment_responseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAdyen_payment_responseArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_responseWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_responseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_responseOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Adyen_payment_responseOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_responseWhereUniqueInput, {
    nullable: true
  })
  cursor?: Adyen_payment_responseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_responseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "order_transaction_id" | "result_code" | "response" | "created_at" | "updated_at"> | undefined;
}
