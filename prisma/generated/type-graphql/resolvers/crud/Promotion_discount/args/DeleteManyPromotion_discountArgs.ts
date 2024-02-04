import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountWhereInput } from "../../../inputs/Promotion_discountWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_discountArgs {
  @TypeGraphQL.Field(_type => Promotion_discountWhereInput, {
    nullable: true
  })
  where?: Promotion_discountWhereInput | undefined;
}
