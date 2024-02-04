import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slot_translationCreateManyInput } from "../../../inputs/Cms_slot_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCms_slot_translationArgs {
  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateManyInput], {
    nullable: false
  })
  data!: Cms_slot_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
