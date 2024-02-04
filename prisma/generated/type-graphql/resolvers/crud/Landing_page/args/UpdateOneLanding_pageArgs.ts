import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageUpdateInput } from "../../../inputs/Landing_pageUpdateInput";
import { Landing_pageWhereUniqueInput } from "../../../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLanding_pageArgs {
  @TypeGraphQL.Field(_type => Landing_pageUpdateInput, {
    nullable: false
  })
  data!: Landing_pageUpdateInput;

  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_pageWhereUniqueInput;
}
