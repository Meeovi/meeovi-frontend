import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_customerCreateManyInput } from "../../../inputs/Promotion_persona_customerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_persona_customerArgs {
  @TypeGraphQL.Field(_type => [Promotion_persona_customerCreateManyInput], {
    nullable: false
  })
  data!: Promotion_persona_customerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
