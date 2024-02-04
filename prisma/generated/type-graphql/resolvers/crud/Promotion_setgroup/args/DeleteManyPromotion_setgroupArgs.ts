import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupWhereInput } from "../../../inputs/Promotion_setgroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_setgroupArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroupWhereInput, {
    nullable: true
  })
  where?: Promotion_setgroupWhereInput | undefined;
}
