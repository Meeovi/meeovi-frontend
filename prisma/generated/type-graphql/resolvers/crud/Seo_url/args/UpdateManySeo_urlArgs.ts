import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlUpdateManyMutationInput } from "../../../inputs/Seo_urlUpdateManyMutationInput";
import { Seo_urlWhereInput } from "../../../inputs/Seo_urlWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySeo_urlArgs {
  @TypeGraphQL.Field(_type => Seo_urlUpdateManyMutationInput, {
    nullable: false
  })
  data!: Seo_urlUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Seo_urlWhereInput, {
    nullable: true
  })
  where?: Seo_urlWhereInput | undefined;
}
