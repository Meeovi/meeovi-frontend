import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_tagOrderByWithRelationAndSearchRelevanceInput";
import { Order_tagWhereInput } from "../../../inputs/Order_tagWhereInput";
import { Order_tagWhereUniqueInput } from "../../../inputs/Order_tagWhereUniqueInput";
import { Order_tagScalarFieldEnum } from "../../../../enums/Order_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TagOrder_tagArgs {
  @TypeGraphQL.Field(_type => Order_tagWhereInput, {
    nullable: true
  })
  where?: Order_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_tagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"order_id" | "order_version_id" | "tag_id"> | undefined;
}
