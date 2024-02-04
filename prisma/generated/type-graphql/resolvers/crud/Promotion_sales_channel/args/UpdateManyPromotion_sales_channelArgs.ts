import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_sales_channelUpdateManyMutationInput } from "../../../inputs/Promotion_sales_channelUpdateManyMutationInput";
import { Promotion_sales_channelWhereInput } from "../../../inputs/Promotion_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_sales_channelArgs {
  @TypeGraphQL.Field(_type => Promotion_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_sales_channelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_sales_channelWhereInput, {
    nullable: true
  })
  where?: Promotion_sales_channelWhereInput | undefined;
}
