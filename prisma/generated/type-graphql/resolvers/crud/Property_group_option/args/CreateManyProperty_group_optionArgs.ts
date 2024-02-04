import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_optionCreateManyInput } from "../../../inputs/Property_group_optionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProperty_group_optionArgs {
  @TypeGraphQL.Field(_type => [Property_group_optionCreateManyInput], {
    nullable: false
  })
  data!: Property_group_optionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
