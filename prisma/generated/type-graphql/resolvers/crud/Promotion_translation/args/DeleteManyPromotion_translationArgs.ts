import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_translationWhereInput } from "../../../inputs/Promotion_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_translationArgs {
  @TypeGraphQL.Field(_type => Promotion_translationWhereInput, {
    nullable: true
  })
  where?: Promotion_translationWhereInput | undefined;
}
