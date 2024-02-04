import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Currency_translationOrderByWithRelationAndSearchRelevanceInput";
import { Currency_translationWhereInput } from "../../../inputs/Currency_translationWhereInput";
import { Currency_translationWhereUniqueInput } from "../../../inputs/Currency_translationWhereUniqueInput";
import { Currency_translationScalarFieldEnum } from "../../../../enums/Currency_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCurrency_translationArgs {
  @TypeGraphQL.Field(_type => Currency_translationWhereInput, {
    nullable: true
  })
  where?: Currency_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Currency_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Currency_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"currency_id" | "language_id" | "short_name" | "name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
