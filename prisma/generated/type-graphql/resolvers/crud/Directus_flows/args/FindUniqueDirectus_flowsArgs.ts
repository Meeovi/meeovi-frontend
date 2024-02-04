import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsWhereUniqueInput } from "../../../inputs/Directus_flowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => Directus_flowsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_flowsWhereUniqueInput;
}
