import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_state_dataOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Adyen_payment_state_dataOrderByWithRelationAndSearchRelevanceInput";
import { Adyen_payment_state_dataWhereInput } from "../../../inputs/Adyen_payment_state_dataWhereInput";
import { Adyen_payment_state_dataWhereUniqueInput } from "../../../inputs/Adyen_payment_state_dataWhereUniqueInput";
import { Adyen_payment_state_dataScalarFieldEnum } from "../../../../enums/Adyen_payment_state_dataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAdyen_payment_state_dataOrThrowArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_state_dataWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_state_dataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Adyen_payment_state_dataOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_state_dataWhereUniqueInput, {
    nullable: true
  })
  cursor?: Adyen_payment_state_dataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "token" | "state_data" | "created_at" | "updated_at"> | undefined;
}
