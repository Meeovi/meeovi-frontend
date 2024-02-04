import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityCreateManyInput } from "../../../inputs/Custom_entityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustom_entityArgs {
  @TypeGraphQL.Field(_type => [Custom_entityCreateManyInput], {
    nullable: false
  })
  data!: Custom_entityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
