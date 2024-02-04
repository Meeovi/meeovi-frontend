import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_sales_channelCreateManyInput } from "../../../inputs/Promotion_sales_channelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_sales_channelArgs {
  @TypeGraphQL.Field(_type => [Promotion_sales_channelCreateManyInput], {
    nullable: false
  })
  data!: Promotion_sales_channelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
