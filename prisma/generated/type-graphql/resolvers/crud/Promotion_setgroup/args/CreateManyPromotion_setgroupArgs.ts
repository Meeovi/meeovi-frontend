import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupCreateManyInput } from "../../../inputs/Promotion_setgroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_setgroupArgs {
  @TypeGraphQL.Field(_type => [Promotion_setgroupCreateManyInput], {
    nullable: false
  })
  data!: Promotion_setgroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
