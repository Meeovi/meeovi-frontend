import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SalutationOrderByWithRelationAndSearchRelevanceInput";
import { SalutationWhereInput } from "../../../inputs/SalutationWhereInput";
import { SalutationWhereUniqueInput } from "../../../inputs/SalutationWhereUniqueInput";
import { SalutationScalarFieldEnum } from "../../../../enums/SalutationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSalutationOrThrowArgs {
  @TypeGraphQL.Field(_type => SalutationWhereInput, {
    nullable: true
  })
  where?: SalutationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalutationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SalutationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SalutationWhereUniqueInput, {
    nullable: true
  })
  cursor?: SalutationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SalutationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "salutation_key" | "created_at" | "updated_at"> | undefined;
}
