import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_set_relationCreateManyInput } from "../../../inputs/Custom_field_set_relationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustom_field_set_relationArgs {
  @TypeGraphQL.Field(_type => [Custom_field_set_relationCreateManyInput], {
    nullable: false
  })
  data!: Custom_field_set_relationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
