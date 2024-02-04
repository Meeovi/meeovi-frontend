import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupUpdateManyMutationInput } from "../../../inputs/Promotion_setgroupUpdateManyMutationInput";
import { Promotion_setgroupWhereInput } from "../../../inputs/Promotion_setgroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_setgroupArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_setgroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_setgroupWhereInput, {
    nullable: true
  })
  where?: Promotion_setgroupWhereInput | undefined;
}
