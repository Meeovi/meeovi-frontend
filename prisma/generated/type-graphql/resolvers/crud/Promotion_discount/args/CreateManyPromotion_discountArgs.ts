import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountCreateManyInput } from "../../../inputs/Promotion_discountCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_discountArgs {
  @TypeGraphQL.Field(_type => [Promotion_discountCreateManyInput], {
    nullable: false
  })
  data!: Promotion_discountCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
