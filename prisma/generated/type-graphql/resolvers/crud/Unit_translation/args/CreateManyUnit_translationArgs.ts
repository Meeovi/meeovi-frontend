import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationCreateManyInput } from "../../../inputs/Unit_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUnit_translationArgs {
  @TypeGraphQL.Field(_type => [Unit_translationCreateManyInput], {
    nullable: false
  })
  data!: Unit_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
